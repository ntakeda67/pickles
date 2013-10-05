source ./testEnv.conf

TEST_RESULT_DIR=testOutput
mkdir -p ${TEST_RESULT_DIR}

java -jar ${TEST_DRIVER} --tests all --runnerMode DEBUG --basePath ../ --testOutput ${TEST_RESULT_DIR}