import { defineStore } from 'pinia'
import { LinearRegressionModel } from '../models/LinearRegressionModel'

export const useLRStore = defineStore('LR', {
    state: () => ({
        xs: [],
        ys: [],
        m: 0,
        b: 0
    }),
    actions: {
            addPoint(x, y) {
            this.xs.push(x)
            this.ys.push(y)
            this.trainModel()
        },
        clearPoints() {
            this.xs = []
            this.ys = []
            this.m = 0
            this.b = 0
        },
        trainModel() {
            if (this.xs.length < 2) return

            const model = new LinearRegressionModel()
            model.addPoints(this.xs, this.ys)
            try {
                model.train(500, 0.001) 
            } catch (error) {
                console.error("Training error:", error)
            }

            this.m = model.m
            this.b = model.b
        }
    }
})
