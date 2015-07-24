BIN = ./node_modules/.bin
SRC = $(wildcard src/*.js) $(wildcard src/*/*.js) $(wildcard src/*/*/*.js)
LIB = $(SRC:src/%.js=lib/%.js)

build: babel
babel: $(LIB)

lib/%.js: src/%.js
	@mkdir -p $(@D)
	@$(BIN)/babel $< --out-file $@ --source-maps-inline --blacklist regenerator

clean:
	@rm -rf lib

lint:
	@$(BIN)/eslint src

release-major: build lint
	@$(BIN)/bump --major

release-minor: build lint
	@$(BIN)/bump --minor

release-patch: build lint
	@$(BIN)/bump --patch

publish:
	npm publish
	git push --tags origin HEAD:master
