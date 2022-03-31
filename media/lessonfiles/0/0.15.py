from asyncio.proactor_events import _ProactorBaseWritePipeTransport


polo = {
  "brand": "Fred Perry",
  "type": "polo",
  "year": 2020,
  "color": {"green": '0 255 0', "red": '255 0 0'}
}

x = polo.get("color")
print(x)
x = polo.get("color").get("green")
print(x)


x = polo.keys()
print(x)


polo["amount"] = 5
print(polo)


polo["amount"] -= 1  # Equal to: polo["amount"] = polo["amount"] - 1
print(polo)


print(polo.values())


print(polo.items())


polo.update({"year": 2019})
print(polo["year"])


polo.pop("amount")


del polo["color"]


new_polo = polo.copy()
print(polo)
print(new_polo)


polo.clear()
print(polo)


del polo
