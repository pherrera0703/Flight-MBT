RunAction "100-Login", oneIteration
RunAction "200-BookFlight", oneIteration, "London", "Paris", "Economy", "1", "John Unitas", "1", "4/14/2026 12:00:00 AM"
RunAction "300-ChangeOrder", oneIteration
RunAction "400-DeleteOrderNum", oneIteration, Parameter("200-BookFlight", "OrderNumberOut"), Parameter("200-BookFlight", "PassengerNameOut"), Parameter("200-BookFlight", "OrderDateOut")
RunAction "700-Logout", oneIteration
