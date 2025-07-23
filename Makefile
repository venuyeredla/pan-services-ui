# phony targets
.PHONY: all clean test

run:
	npm run start

build:
	npm run build

img-build: build
	docker build . -t pan-ui:latest