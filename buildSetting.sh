#!/ /bin/bash

echo ">>>...boilerplate_react_native_typescript Metro"
adb reverse --remove-all
echo ">>>>...adb reverse port"
adb reverse tcp:8081 tcp:8081
echo ">>>>...start react-native"
npm start -- --reset-cache
