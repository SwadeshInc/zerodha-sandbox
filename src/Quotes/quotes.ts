export const GetQuotes = (request: any, response: any) => {
    response.status(200).jsonp({
        "COLLABORATION-NEEDED": "Please contibute the request query string handling logic https://github.com/nordible/zerodha-sandbox/pulls",
        "status":"success",
        "data":{
          "NSE:INFY":{
            "instrument_token":408065,
            "timestamp":"2019-12-09 17:36:07",
            "last_trade_time":"2019-12-09 15:57:46",
            "last_price":717.25,
            "last_quantity":20,
            "buy_quantity":0,
            "sell_quantity":1915,
            "volume":6435865,
            "average_price":718.65,
            "oi":0,
            "oi_day_high":0,
            "oi_day_low":0,
            "net_change":0,
            "lower_circuit_limit":645.55,
            "upper_circuit_limit":788.95,
            "ohlc":{
              "open":716,
              "high":722.35,
              "low":714.25,
              "close":715.1
            },
            "depth":{
              "buy":[
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                }
              ],
              "sell":[
                {
                  "price":717.25,
                  "quantity":1915,
                  "orders":26
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                }
              ]
            }
          },
          "BSE:INFY":{
            "instrument_token":408065,
            "timestamp":"2019-12-09 17:36:07",
            "last_trade_time":"2019-12-09 15:57:46",
            "last_price":717.25,
            "last_quantity":20,
            "buy_quantity":0,
            "sell_quantity":1915,
            "volume":6435865,
            "average_price":718.65,
            "oi":0,
            "oi_day_high":0,
            "oi_day_low":0,
            "net_change":0,
            "lower_circuit_limit":645.55,
            "upper_circuit_limit":788.95,
            "ohlc":{
              "open":716,
              "high":722.35,
              "low":714.25,
              "close":715.1
            },
            "depth":{
              "buy":[
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                }
              ],
              "sell":[
                {
                  "price":717.25,
                  "quantity":1915,
                  "orders":26
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                },
                {
                  "price":0,
                  "quantity":0,
                  "orders":0
                }
              ]
            }
          }
        }
      });
}

export const GetQuotesOHLC = (request: any, response: any) => {
    response.status(200).jsonp({
        "COLLABORATION-NEEDED": "Please contibute the request query string handling logic https://github.com/nordible/zerodha-sandbox/pulls",
        "status": "success",
        "data": {
            "BSE:SENSEX": {
                "instrument_token": 265,
                "last_price": 31606.48,
                "ohlc": {
                    "open": 31713.5,
                    "high": 31713.5,
                    "low": 31586.53,
                    "close": 31809.55
                }
            },
            "NSE:INFY": {
                "instrument_token": 408065,
                "last_price": 890.9,
                "ohlc": {
                    "open": 900,
                    "high": 900.3,
                    "low": 890,
                    "close": 901.9
                }
            },
            "NSE:NIFTY 50": {
                "instrument_token": 256265,
                "last_price": 9893.4,
                "ohlc": {
                    "open": 9899.25,
                    "high": 9911.9,
                    "low": 9882.55,
                    "close": 9952.2
                }
            }
        }
    });
}

export const GetQuotesLTP = (request: any, response: any) => {
    
    response.status(200).jsonp({
        "COLLABORATION-NEEDED": "Please contibute the request query string handling logic https://github.com/nordible/zerodha-sandbox/pulls",
        "status": "success",
        "data": {
            "BSE:SENSEX": {
                "instrument_token": 265,
                "last_price": 31606.48
            },
            "NSE:INFY": {
                "instrument_token": 408065,
                "last_price": 890.9
            },
            "NSE:NIFTY 50": {
                "instrument_token": 256265,
                "last_price": 9893.4
            }
        }
    });
}
