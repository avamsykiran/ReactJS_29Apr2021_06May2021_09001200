
import arthService from './ArthService';

describe("ArthService",()=>{
    
    it(" object has to be created and exported.",()=>{
        expect(arthService).toBeTruthy();
    });

    describe("#sum",()=>{
        it("should return 0 given 0's",()=>{
            expect(arthService.sum(0,0)).toBe(0);
        });
        it("should return 10 given 10,0",()=>{
            expect(arthService.sum(10,0)).toBe(10);
        });
        it("should return 20 given 10,10",()=>{
            expect(arthService.sum(10,10)).toBe(20);
        });
        it("should return 0 given 10,-10",()=>{
            expect(arthService.sum(10,-10)).toBe(0);
        });
    });

    describe("#dif", () => {
        it("should return 0 given 0's ",() => {
            expect(arthService.dif(0,0)).toBe(0);
        });
        it("should return 10 given 10,0's ",() => {
            expect(arthService.dif(10,0)).toBe(10);
        });
        it("should return 20 given 20, 0",() => {
            expect(arthService.dif(20,0)).toBe(20);
        });
        it("should return 0 given 10,10 ",() => {
            expect(arthService.dif(10,10)).toBe(0);
        });
    })
});