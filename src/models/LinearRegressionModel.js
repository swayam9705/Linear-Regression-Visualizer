export class LinearRegressionModel {
    constructor() {
        this.X = []
        this.Y = []
        this.m = 0
        this.b = 0
    }

    addPoint(x_, y_) {
        this.X.push(x_)
        this.Y.push(y_)
    }

    addPoints(xs, ys) {
        this.X.push(...xs)
        this.Y.push(...ys)
    }

    _squaredError() {
        let error = 0
        let N = this.X.length

        for (let i = 0; i < N; i++) {
            error += Math.pow((this.Y[i] - (this.m * this.X[i] + this.b)), 2)
        }

        return error
    }

    _gradientStep() {
        let mGradient = 0
        let bGradient = 0

        let N = this.X.length

        for (let i = 0; i < N; i++) {
            mGradient += -2 * (this.Y[i] - this.m * this.X[i] - this.b) * this.X[i]
            bGradient += -2 * (this.Y[i] - this.m * this.X[i] - this.b)
        }
        return [mGradient, bGradient]
    }

    _addGradientStep(L) {
        let [mGrad, bGrad] = this._gradientStep()
        this.m -= L * mGrad
        this.b -= L * bGrad
    }

    train(epochs = 500, L = 0.01, logSquareError = false) {

        if (this.X.length != this.Y.length) {
            throw new Error("The lengths of x and y coordinates are different")
        }

        if (this.X.length < 2) {
            throw new Error("Dataset should contain atleast 2 points")
        }

        console.log("Linear Regression Model Training ...")
        for (let i = 0; i < epochs; i++) {
            if (logSquareError) {
                console.log(`Iteration ${i} : ${this._squaredError()}`)
            }

            this._addGradientStep(L)
        }
    }

    predict(x) {
        return this.m * x + this.b
    }
        
}