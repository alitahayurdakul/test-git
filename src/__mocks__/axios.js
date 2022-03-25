const mockResponse = {
    
    data: {
        USD:{
            Buying:"5",
            Selling:"6",
            Change:"-%10"
        },
        data: {
            market_data: {
                price_usd: "6",
                percent_change_usd_last_24_hours: "-0.14"
            }
        }
    }
    
}
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}