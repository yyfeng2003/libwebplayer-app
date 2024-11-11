APP_ABI := armeabi-v7a  arm64-v8a
#APP_ABI := arm64-v8a
#APP_ABI := armeabi-v7a

#libcurl support http only
APP_PLATFORM := android-14

#libcurl support http and https
#APP_PLATFORM := android-21

#APP_OPTIM := release
APP_OPTIM := debug

#NDK_TOOLCHAIN_VERSION := 4.9

#APP_STL := gnustl_static
#APP_STL := stlport_static 
APP_STL := c++_static

APP_CPPFLAGS += -frtti -fexceptions -std=c++11 

#LOCAL_C_INCLUDES += ${ANDROID_NDK}/sources/cxx-stl/stlport/stlport
#LOCAL_C_INCLUDES += ${ANDROID_NDK}/sources/cxx-stl/gnu-libstdc++/4.9/include

# not compile corefundation library for android.
# corefoundation
APP_MODULES := webplayer