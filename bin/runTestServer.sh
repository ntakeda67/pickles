source ./testEnv.conf

PID_FILE=js_test_driver.pid

if [ -a ${PID_FILE} ]; then
     kill `cat ${PID_FILE}`
fi

java -jar ${TEST_DRIVER} --port 9876 --basePath ../ & 
echo $! > ${PID_FILE}
