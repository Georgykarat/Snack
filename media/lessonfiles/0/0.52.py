# def decorator(taste):
#     if taste == "vanilla":    
#         def get_pie():
#             print('You got vanilla pie')
#         get_pie()   
#     else:
#         def get_pie():
#             print('You got strawberry pie')
#         get_pie()

# decorator('strawberry')





# def sayGoodbye(word):
#     print('Say', word + '!')

# sayGoodbye('goodbye')




# def sayHello(function):
#     def inside():
#         print('Hello!')
#         function()
#     return inside

# def sayHowAreYou(function):
#     def inside():
#         print('How are you?')
#         function()
#     return inside

# def sayGoodbye(word='goodbye'):
#     print('Say', word + '!')

# sayGoodbye('goodbye')
# print('Decorator starts')
# sayGoodbye = sayHello(sayHowAreYou(sayGoodbye))
# sayGoodbye()