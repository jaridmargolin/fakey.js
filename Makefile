test: 
	@NODE_ENV=test ./node_modules/.bin/mocha-phantomjs test/_runner.html
		
.PHONY: test