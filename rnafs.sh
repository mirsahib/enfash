#!/bin/bash
base_url="$PWD/src"

if [ -d "$base_url" ]
then
    echo "is a directory"
else
    echo "Installing dependencies..."
    yarn add @reduxjs/toolkit
    yarn add redux
    yarn add react-redux
    yarn add @react-navigation/native
    yarn add react-native-screens react-native-safe-area-context
    yarn add @react-navigation/native-stack
    yarn add @react-navigation/bottom-tabs
    yarn add @react-navigation/drawer
    yarn add react-native-gesture-handler react-native-reanimated
    echo "Creating directories..."
    mkdir -p $base_url
    mkdir -p $base_url/assets
    mkdir -p $base_url/context
    mkdir -p $base_url/components
    mkdir -p $base_url/features
    mkdir -p $base_url/navigation
    mkdir -p $base_url/store
    mkdir -p $base_url/utils
fi