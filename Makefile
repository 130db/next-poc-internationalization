# Usage
# make - pull deploy reload clean

BUILD_DIR=dist
#APP_NAME=next-app

# all: pull deploy reload
all: pull deploy

pull:
	@echo 'Pull updates from GIT repo...'
	@git pull

deploy:
	@echo 'Deploy to production started...'
	@rm -rf ${BUILD_DIR}
	
	@echo 'Updating dependencies...'
	@yarn install

	@echo 'Building production version...'
	@BUILD_DIR=${BUILD_DIR} yarn build
	@if [ ! -d "${BUILD_DIR}" ]; then >&2 echo "Directory '${BUILD_DIR}' does not exist"; false; fi
	
	@echo 'Removing old build...'
	@rm -rf .next

	@echo 'Moving build to destination...'
	@mv ${BUILD_DIR} .next
	@echo 'Deploy to production completed'

reload:
	@echo 'Reloading PM2 app ${APP_NAME} ...'
	@pm2 reload ${APP_NAME} --update-env
	@echo 'Reseting PM2 counters...'
	@pm2 reset ${APP_NAME}
	@echo 'Reload completed'

clean:
	@echo 'Clean up started ...'
	@rm -rf .next node_modules dist
	@echo 'Clean up completed'
