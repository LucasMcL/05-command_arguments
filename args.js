#!/usr/bin/env node

let [,,...args] = process.argv

function sum(args) {
	sum = args.map(elem => Number(elem))
						.filter(elem => !isNaN(elem))
						.reduce((sum, elem) => sum + elem, 0)

	console.log(sum)
}

sum(args)
