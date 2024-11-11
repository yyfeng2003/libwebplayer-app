package com.leaptime.utils;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.util.Enumeration;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipInputStream;

import android.content.Context;
import android.content.res.AssetManager;
import android.util.Log;

public class FileUtil {
	
	private static final String TAG = "FileUtil";

	/**
	 * read data from file under "/" path
	 * 
	 * @param filename
	 * @return
	 */
	public static String readResFile(Context context, String filename) {

		InputStream is = context.getClass().getClassLoader().getResourceAsStream(filename);

		if (is == null) {
			return null;
		}

		StringBuilder builder = new StringBuilder();
		String content = "";
		BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(is));

		try {
			while (bufferedReader.ready()) {
				content = bufferedReader.readLine();
				builder.append(content);
			}
			bufferedReader.close();
		} catch (IOException e) {
			return null;
		}

		return builder.toString();
	}

	/**
	 * read data from file under "assets/" path
	 * 
	 * @param context
	 * @param file
	 * @return
	 */
	public static String readFile(Context context, String file) {

		try {
			InputStream is = context.getResources().getAssets().open(file);
			Reader in = new InputStreamReader(is, "UTF-8");

			StringBuffer sb = new StringBuffer(4096);
			char[] buf = new char[4096];
			int read;
			while ((read = in.read(buf, 0, buf.length)) != -1) {
				sb.append(buf, 0, read);
			}

			is.close();
			is = null;
			in = null;
			buf = null;

			String result = sb.toString();
			sb = null;

			return result;

		} catch (Exception e) {
			Log.e(TAG, file + " read error!");
		}

		return null;
	}

	/**
	 * read gzip file
	 * 
	 * @param file
	 * @return
	 */
	public static String readZippedFile(Context context, String file) {

		try {
			byte[] bytes = readFromFile(context, file);
			if (bytes != null) {
				byte[] raw = Gzip.inflate(bytes);
				bytes = null;
				String result = new String(raw, "UTF-8");
				raw = null;
				return result;
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return null;
	}

	public static byte[] readFromFile(Context context, String file) {

		try {
			InputStream is = context.getResources().getAssets().open(file);
			ByteArrayOutputStream bos = new ByteArrayOutputStream();

			byte[] buf = new byte[4096];
			int len;
			while ((len = is.read(buf)) > 0) {
				bos.write(buf, 0, len);
			}

			is.close();
			is = null;
			buf = null;

			byte[] result = bos.toByteArray();
			bos = null;

			return result;

		} catch (IOException e) {
			// e.printStackTrace();
			Log.e(TAG, file + " read error!");
		}

		return null;
	}
	
	public static byte[] readFromFile(String fileName, int offset, int len) {
		if (fileName == null) {
			return null;
		}

		File file = new File(fileName);
		if (!file.exists()) {
			Log.i(TAG, "readFromFile: file not found");
			return null;
		}

		if (len == -1) {
			len = (int) file.length();
		}

		Log.d(TAG, "readFromFile : offset = " + offset + " len = " + len + " offset + len = " + (offset + len));

		if(offset < 0){
			Log.e(TAG, "readFromFile invalid offset:" + offset);
			return null;
		}
		if(len <= 0 ){
			Log.e(TAG, "readFromFile invalid len:" + len);
			return null;
		}
		if(offset + len > (int) file.length()){
			Log.e(TAG, "readFromFile invalid file len:" + file.length());
			return null;
		}

		byte[] b = null;
		try {
			RandomAccessFile in = new RandomAccessFile(fileName, "r");
			b = new byte[len]; 
			in.seek(offset);
			in.readFully(b);
			in.close();

		} catch (Exception e) {
			Log.e(TAG, "readFromFile : errMsg = " + e.getMessage());
			e.printStackTrace();
		}
		return b;
	}
	
	
	public static void removeFile(String file) {
		removeFile(new File(file));
	}
	
	public static void removeFile(File file) {  
	    if (file.isFile()) {  
	        file.delete();  
	        return;  
	    }  

	    if(file.isDirectory()){  
	        File[] childFiles = file.listFiles();  
	        if (childFiles != null && childFiles.length > 0) {
	        	for (int i = 0, l = childFiles.length; i < l; i++) {  
		        	removeFile(childFiles[i]);  
		        }  
	        }
	        file.delete();  
	    }  
	}

	public static void copyFile(Context context, String filename, String outPath) {
		AssetManager assetManager = context.getAssets();

		InputStream in;
		OutputStream out;
		try {
			in = assetManager.open(filename);
			String newFileName = outPath + "/" + filename;
			out = new FileOutputStream(newFileName);

			byte[] buffer = new byte[4096];
			int read;
			while ((read = in.read(buffer)) != -1) {
				out.write(buffer, 0, read);
			}
			in.close();
			out.flush();
			out.close();
		} catch (Exception e) {
			Log.e(TAG, e.getMessage());
		}
	}

	public static boolean unzip(String zipArchive, String outputDir) {
		return unzip(zipArchive, outputDir, 0);
	}

	public static boolean unzip(String zipArchive, String outputDir, int seed) {
		if (zipArchive.startsWith("/")) {
			return unzipFromPath(zipArchive, outputDir, seed);
		} else {
			return unzipFromAssets(zipArchive, outputDir, seed);
		}
	}

	public static boolean unzipFromAssets(String zipArchive, String outputDir, int seed) {

		try {
			AssetManager assets = OS.getContext().getAssets();
			ZipInputStream inZip = new ZipInputStream(assets.open(zipArchive));
			ZipEntry zipEntry;

			while ((zipEntry = inZip.getNextEntry()) != null) {
				String szName = zipEntry.getName();
				if (zipEntry.isDirectory()) {
					createDir(new File(outputDir, szName));
				} else {
					try {
						File outputFile = new File(outputDir, szName);
						if (!outputFile.getParentFile().exists()) {
							createDir(outputFile.getParentFile());
						}
						FileOutputStream out = new FileOutputStream(outputFile);
						byte[] buffer = new byte[4096];
						int len;
						while ((len = inZip.read(buffer)) != -1) {
							if (seed != 0) for (int i = 0; i < len; i++) {
								buffer[i] ^= seed;
							}
							out.write(buffer, 0, len);
							out.flush();
						}
						out.close();
					} catch(Exception e) {
						Log.e(TAG, e.getMessage());
					}
				}
			}
			inZip.close();
			return true;
		}
		catch(Exception e) {
			Log.e(TAG, e.getMessage());
			return false;
		}
	}

	public static boolean unzipFromPath(String zipArchive, String outputDir, int seed) {
		
		try {
			//Log.i("unzip: ", zipArchive);

			File archive = new File(zipArchive);
			ZipFile zipfile = new ZipFile(archive);

			for (Enumeration e = zipfile.entries(); e.hasMoreElements();) {
				ZipEntry entry = (ZipEntry) e.nextElement();

				if (entry.isDirectory()) {
					createDir(new File(outputDir, entry.getName()));
				}
				else {

					File outputFile = new File(outputDir, entry.getName());
					if (!outputFile.getParentFile().exists()) {
						createDir(outputFile.getParentFile());
					}

					BufferedInputStream inputStream = new BufferedInputStream(zipfile.getInputStream(entry));
					BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(outputFile));

					try {
						byte b[] = new byte[4096];
						int n;
						while ((n = inputStream.read(b)) >= 0) {
							if (seed != 0) for (int i = 0; i < n; i++) {
								b[i] ^= seed;
							}
							outputStream.write(b, 0, n);
						}
					} finally {
						outputStream.close();
						inputStream.close();
					}
				}
			}
			return true;
		}
		catch (Exception e) {
			Log.e(TAG, e.getMessage());
		}
		
		return false;
	}

	private static void createDir(File dir) {

		if (dir.exists())
			return;
		
		if (!dir.mkdirs()) {
			throw new RuntimeException("Can not create dir " + dir);
		}
	}
}
