const rewire = require("rewire")
const index = rewire("./index")
const handleNextSlide = index.__get__("handleNextSlide")
// @ponicode
describe("handleNextSlide", () => {
    test("0", () => {
        let callFunction = () => {
            handleNextSlide()
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        handleNextSlide()
    })
})
