/**
 Linear Regression using ES6
 */


const Math = {
	sum: (arr) => arr.reduce((total, amount) => total + amount),
	avg: (arr) => Math.sum(arr) / arr.length,
}

const linearRegression = (data) => {
	let
		// average of independent variable x
		x_avg,
		// average of dependent variable y
		y_avg,
		// numerator : Sum of (xi - x)(yi - y)
		num,
		// denominator : (xi - x)**2
		den,
		// slope
		m,
		// intercept
		b,
		// the sum of squared error: sum of (y - (mx + b))
		sse
	
	x_avg = Math.avg(data.x)
	
	y_avg = Math.avg(data.y)
	
	num = Math.sum(data.x.map((x, i) => (x - x_avg) * (data.y[i] - y_avg)))
	
	den = Math.sum(data.x.map(x => ((x - x_avg) ** 2)))
	
	m = num / den
	
	b = y_avg - m * x_avg
	
	sse = Math.sum(data.y.map((y, i) => (y - (m * data.x[i] + b)) ** 2))
	
	// print result
	const msg = `slope: ${m}, intercept: ${b}, y=${m}x + ${b}, SSE: ${sse}`
	
	return msg
}


/**
 Test example

 const trainingSet = {
	x: [3, 4, 5, 6, 7, 8],
	y: [35, 50, 45, 64, 66, 70]
}
 
 const result = linearRegression(trainingSet)
 console.log(result)
 // slope: 6.914285714285715, intercept: 16.971428571428568, y=6.914285714285715x + 16.971428571428568, SSE: 115.37142857142848
 */

