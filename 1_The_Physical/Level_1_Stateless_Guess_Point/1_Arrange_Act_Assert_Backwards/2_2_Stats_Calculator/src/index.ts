export class StatsCalculator{
    private constructor() {

    }

    public getNumberOfElements(numbers: number[]) {
        return numbers.length
    }

    public getMax(numbers: number[]) {
        if (numbers.length == 0) return null
        let maxVal = numbers[0]
        for (let i = 0; i < numbers.length; i++) {
            const currVal = numbers[i]
            if (currVal > maxVal) {
                maxVal = currVal
            }
        }
        return maxVal
    }

    public getMin(numbers: number[]) {
        if (numbers.length == 0) return null
        let minVal = numbers[0]
        for (let i = 0; i < numbers.length; i++) {
            const currVal = numbers[i]
            if (currVal < minVal) {
                minVal = currVal
            }
        }
        return minVal
    }

    public static create() {
        return new StatsCalculator()
    }
}