import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('hello-world.spec.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(HelloWorld);
    });

    describe('Computed parseString Data inputed to Array', () => {
        it('return empty Array', () => {
            wrapper.setData({ input: ""});
            expect(wrapper.vm.tab).toStrictEqual([]);
        });

        it('return not empty Array', () => {
           wrapper.setData({ input: "2,-1,1"});
           expect(wrapper.vm.tab).toStrictEqual([2,-1,1]);
        });
    });

    describe('Computed Result from Array', () => {

        it('Result when Input is [] expected 0', () => {
            wrapper.setData({ input: ""});
            expect(wrapper.vm.result).toBe(0);
        });

        it('Result when Input is [8,5,10] expected 5', () => {
            wrapper.setData({ input: "8,5,10"});
            expect(wrapper.vm.result).toBe(5);
        });

        it('Result when Input is [5,4,-9,6,-10,-1,8] expected -1', () => {
            wrapper.setData({ input: "5,4,-9,6,-10,-1,8"});
            expect(wrapper.vm.result).toBe(-1);
        });

        it('Result when Input is [8,2,3,-2] expected 2', () => {
            wrapper.setData({ input: "8,2,3,-2"});
            expect(wrapper.vm.result).toBe(2);
        });

        it('Result when Input is [2,0] expected 0', () => {
            wrapper.setData({ input: "2,0"});
            expect(wrapper.vm.result).toBe(0);
        });
    })
})
