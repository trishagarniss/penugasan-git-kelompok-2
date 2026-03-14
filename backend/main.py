from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Variabel penampung data
items = []

# Skema Data
class Item(BaseModel):
    id: int
    name: str
    
# GET: untuk melihat isi list items
@app.get("/items")
def get_items():
    return items

# POST: untuk menambahkan data ke list items
@app.post("/items")
def create_item(item: Item):
    items.append(item.model_dump()) # Masukin ke list
    return {"message": "Data masuk!", "data": item}