import { test, expect} from '@playwright/test'

test.describe.parallel('Api testing', ()=> {
    test('[] simple api test - Assert Response Status', async({request}) => {
        const response = await request.get('users/2')
        expect(response.status()).toBe(200)
    })
})