MY_LOCAL_PATH := $(call my-dir)

### $(info $(MY_LOCAL_PATH))


include $(CLEAR_VARS)

#libuv
include $(MY_LOCAL_PATH)/library/libuv/libs/Android.mk
_LOCAL_C_INCLUDES_ := $(LOCAL_EXPORT_C_INCLUDES)

#libopenssl
include $(MY_LOCAL_PATH)/library/libopenssl/libs/Android.mk
_LOCAL_C_INCLUDES_ += $(LOCAL_EXPORT_C_INCLUDES)

#libwebsockets
include $(MY_LOCAL_PATH)/library/libwebsockets/libs/Android.mk
_LOCAL_C_INCLUDES_ += $(LOCAL_EXPORT_C_INCLUDES)
_LOCAL_CPPFLAGS_ := $(LOCAL_EXPORT_CPPFLAGS)

#libcurl
include $(MY_LOCAL_PATH)/library/libcurl/libs/Android.mk
_LOCAL_C_INCLUDES_ += $(LOCAL_EXPORT_C_INCLUDES)



LOCAL_PATH := $(MY_LOCAL_PATH)

# First, define local static libraries for use in LOCAL_STATIC_LIBRARIES
# We need all of these for V8 to run.
# We put them in jni/lib, but we could also put them somewhere else.


include $(CLEAR_VARS)
LOCAL_MODULE          := lib_v8
LOCAL_MODULE_FILENAME := lib_v8_static
LOCAL_SRC_FILES := library/libv8/libs/$(TARGET_ARCH_ABI)/libv8.a
include $(PREBUILT_STATIC_LIBRARY)


include $(CLEAR_VARS)
LOCAL_MODULE          := freetype
LOCAL_MODULE_FILENAME := freetype_static
LOCAL_SRC_FILES := library/libfreetype/libs/$(TARGET_ARCH_ABI)/libfreetype.a
include $(PREBUILT_STATIC_LIBRARY)


include $(CLEAR_VARS)
LOCAL_MODULE          := png
LOCAL_MODULE_FILENAME := png_static
LOCAL_SRC_FILES := library/libpng/libs/$(TARGET_ARCH_ABI)/libpng.a
include $(PREBUILT_STATIC_LIBRARY)


include $(CLEAR_VARS)
LOCAL_MODULE          := jpeg
LOCAL_MODULE_FILENAME := jpeg_static
LOCAL_SRC_FILES := library/libjpeg/libs/$(TARGET_ARCH_ABI)/libjpeg.a
include $(PREBUILT_STATIC_LIBRARY)


include $(CLEAR_VARS)
LOCAL_MODULE          := webp
LOCAL_MODULE_FILENAME := webp_static
LOCAL_SRC_FILES := library/libwebp/libs/$(TARGET_ARCH_ABI)/libwebp.a
include $(PREBUILT_STATIC_LIBRARY)


include $(CLEAR_VARS)
LOCAL_MODULE          := lame
LOCAL_MODULE_FILENAME := lame_static
LOCAL_SRC_FILES := library/liblame/libs/$(TARGET_ARCH_ABI)/liblame.a
include $(PREBUILT_STATIC_LIBRARY)


include $(CLEAR_VARS)
LOCAL_MODULE          := tremor
LOCAL_MODULE_FILENAME := tremor_static
LOCAL_SRC_FILES := library/libtremor/libs/$(TARGET_ARCH_ABI)/libtremor.a
include $(PREBUILT_STATIC_LIBRARY)


# Now, compile our code and link everything together as a shared library
# in libs/.
# Note that the order of libraries in LOCAL_STATIC_LIBRARIES is important.
# If you swap the order, it likely won't link anymore.

include $(CLEAR_VARS)
LOCAL_MODULE    := webplayer

BIGFILES=-D_FILE_OFFSET_BITS=32

# hide symbols from included static libraries
LOCAL_CPPFLAGS += $(_LOCAL_CPPFLAGS_)
LOCAL_CPPFLAGS += -Wl,--exclude-libs,libv8
LOCAL_CFLAGS   += -Wl,--exclude-libs,libv8
LOCAL_LDFLAGS  += -Wl,--exclude-libs,libv8
#LOCAL_LDFLAGS  += -Wl,--allow-multiple-definition
#LOCAL_LDFLAGS  += -Wl,-Bsymbolic

LOCAL_CFLAGS += -DENABLE_SINGLE_THREADED=1 -DUSE_FILE32API -D__LINUX__=1 -DCOMPATIBLE_GCC4=1 -D__LITTLE_ENDIAN__=1 -DGL_GLEXT_PROTOTYPES=1
LOCAL_CFLAGS += -DNATIVECANVAS_DEBUG=1

LOCAL_CPPFLAGS += -fvisibility=hidden
LOCAL_CFLAGS += -fvisibility=hidden

# use ASan for memory debug
# LOCAL_LDFLAGS += -fsanitize=address
# LOCAL_CFLAGS += -fsanitize=address -fno-omit-frame-pointer


LOCAL_C_INCLUDES := $(_LOCAL_C_INCLUDES_) \
                    $(LOCAL_PATH) \
                    $(LOCAL_PATH)/library/libv8/include \
                    $(LOCAL_PATH)/library/libfreetype/include \
                    $(LOCAL_PATH)/library/libpng/include \
                    $(LOCAL_PATH)/library/libjpeg/include \
                    $(LOCAL_PATH)/library/libwebp/include \
                    $(LOCAL_PATH)/library/liblame/include \
                    $(LOCAL_PATH)/library/libtremor/include \
                    $(LOCAL_PATH)/source/lib/lodefreetype \
                    $(LOCAL_PATH)/source/lib/lodepng \
                    $(LOCAL_PATH)/source/lib/lodejpeg \
                    $(LOCAL_PATH)/source/lib/uri \
                    $(LOCAL_PATH)/source/lib/audio \
                    $(LOCAL_PATH)/source/lib/store \
                    $(LOCAL_PATH)/source/lib/encrypt \
                    $(LOCAL_PATH)/source/lib/http \
                    $(LOCAL_PATH)/source/lib/file \
                    $(LOCAL_PATH)/source/lib/xml2json \
                    $(LOCAL_PATH)/source/lib/websocket \
                    $(LOCAL_PATH)/source/core \
                    $(LOCAL_PATH)/source/core/support \
                    $(LOCAL_PATH)/source/core/PCCocoa \
                    $(LOCAL_PATH)/source/core/PCCocoa/support \
                    $(LOCAL_PATH)/source/core/PCCanvas \
                    $(LOCAL_PATH)/source/core/PCCanvas/2D \
                    $(LOCAL_PATH)/source/core/PCCanvas/WebGL \
                    $(LOCAL_PATH)/source/core/PCUtils

LOCAL_SRC_FILES := \
                    source/lib/lodefreetype/lodefreetype.cpp \
                    source/lib/uri/uri.cpp \
                    source/lib/lodepng/lodepng.cpp \
                    source/lib/lodejpeg/lodejpeg.cpp \
                    source/lib/encrypt/base64.cpp \
                    source/lib/encrypt/md5/md5.cpp \
                    source/lib/encrypt/encrypt.cpp \
                    source/lib/http/HttpHelper.cpp \
                    source/lib/file/FileHelper.cpp \
                    source/lib/websocket/WebSocket.cpp\
                    source/lib/websocket/uri/Uri.cpp\
                    source/lib/file/android_fopen.c \
                    source/core/PCCocoa/support/NSCArray.cpp \
                    source/core/PCCocoa/NSObject.cpp \
                    source/core/PCCocoa/NSObjectFactory.cpp \
                    source/core/PCCocoa/NSGeometry.cpp \
                    source/core/PCCocoa/NSAutoreleasePool.cpp \
                    source/core/PCCocoa/NSObjectManager.cpp \
                    source/core/PCCocoa/NSArray.cpp \
                    source/core/PCCocoa/CGAffineTransform.cpp \
                    source/core/PCCocoa/NSDictionary.cpp \
                    source/core/PCCocoa/NSNS.cpp \
                    source/core/PCCocoa/NSSet.cpp \
                    source/core/PCCocoa/NSString.cpp \
                    source/core/PCCocoa/NSValue.cpp \
                    source/core/PCCocoa/NSZone.cpp \
                    source/core/PCCocoa/NSCache.cpp \
                    source/core/PCCocoa/NSFont.cpp \
                    source/core/PCConvert.cpp \
                    source/core/PCBindingBase.cpp \
                    source/core/PCBindingEventedBase.cpp \
                    source/core/PCBindingGlobalUtils.cpp \
                    source/core/PCApp.cpp \
                    source/core/PCTimer.cpp \
                    source/core/PCRaf.cpp \
                    source/core/PCTaskQueue.cpp \
                    source/core/PCEventQueue.cpp \
                    source/core/PCLoadQueue.cpp \
                    source/core/PCBase64.cpp \
                    source/core/PCSharedOpenGLContext.cpp \
                    source/core/PCAudio/PCAudioEngine.cpp \
                    source/core/PCAudio/PCAudioPlayer.cpp \
                    source/core/PCAudio/PCBindingAudio.cpp \
                    source/core/PCVideo/PCBindingVideo.cpp \
                    source/core/PCCanvas/PCBindingImage.cpp \
                    source/core/PCCanvas/PCBindingCanvas.cpp \
                    source/core/PCCanvas/PCCanvasContext.cpp \
                    source/core/PCCanvas/PCTexture.cpp \
                    source/core/PCCanvas/PCTextureStorage.cpp \
                    source/core/PCCanvas/PCPresentable.cpp \
                    source/core/PCCanvas/2D/PCBindingCanvasContext2D.cpp \
                    source/core/PCCanvas/2D/PCBindingCanvasPattern.cpp \
                    source/core/PCCanvas/2D/PCBindingCanvasGradient.cpp \
                    source/core/PCCanvas/2D/PCBindingImageData.cpp \
                    source/core/PCCanvas/2D/PCCanvasContext2D.cpp \
                    source/core/PCCanvas/2D/PCCanvasContext2DScreen.cpp \
                    source/core/PCCanvas/2D/PCCanvasContext2DTexture.cpp \
                    source/core/PCCanvas/2D/PCCanvasPattern.cpp \
                    source/core/PCCanvas/2D/PCCanvasGradient.cpp \
                    source/core/PCCanvas/2D/PCFont.cpp \
                    source/core/PCCanvas/2D/PCGLProgram2D.cpp \
                    source/core/PCCanvas/2D/PCGLProgram2DRadialGradient.cpp \
                    source/core/PCCanvas/2D/PCImageData.cpp \
                    source/core/PCCanvas/2D/PCPath.cpp \
                    source/core/PCCanvas/WebGL/PCConvertWebGL.cpp \
                    source/core/PCCanvas/WebGL/PCCanvasContextWebGL.cpp \
                    source/core/PCCanvas/WebGL/PCCanvasContextWebGLScreen.cpp \
                    source/core/PCCanvas/WebGL/PCCanvasContextWebGLTexture.cpp \
                    source/core/PCCanvas/WebGL/PCBindingCanvasContextWebGL.cpp \
                    source/core/PCCanvas/WebGL/PCBindingWebGLObjects.cpp \
                    source/core/PCCanvas/WebGL/PCBindingWebGLExtensions.cpp \
		            source/core/PCUtils/PCBindingTouchInput.cpp \
                    source/core/PCUtils/PCBindingKeyInput.cpp \
                    source/core/PCUtils/PCBindingHttpRequest.cpp \
                    source/core/PCUtils/PCBindingWebSocket.cpp \
                    source/core/PCUtils/PCBindingNativeRequest.cpp \
                    source/core/PCUtils/PCBindingLocalStorage.cpp \
                    source/core/PCUtils/PCBindingCursor.cpp \
                    source/core/PCUtils/PCBindingBlob.cpp \
                    source/core/PCUtils/PCBindingURL.cpp \
                    main.cpp


#LOCAL_STATIC_LIBRARIES := android_native_app_glue lib_v8 libstlport
LOCAL_STATIC_LIBRARIES := lib_v8 libfreetype libjpeg libpng libwebp liblame libtremor ext_curl ext_websockets cpufeatures


#LOCAL_LDLIBS :=  -landroid -lz -llog -lGLESv2 -lGLESv1_CM -lOpenSLES -latomic -Wl,-s
LOCAL_LDLIBS :=  -landroid -lz -llog -lGLESv2 -lGLESv1_CM -lOpenSLES

include $(BUILD_SHARED_LIBRARY)



$(call import-module,android/cpufeatures)
#$(call import-module,android/native_app_glue)


