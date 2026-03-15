from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="API Kelompok 2",
    description="Backend API sederhana untuk manajemen items"
)

# Variabel penampung data
items = []

# Skema Data
class Item(BaseModel):
    id: int
    name: str

@app.get("/", tags=["General"])
def read_root():
    return {
        "message": "Selamat datang di API Kelompok 2!",
        "petunjuk": "Tambahkan /docs di akhir URL untuk melihat dokumentasi interaktif."
    }

# GET: untuk melihat isi list items
@app.get("/items")
def get_items():
    return items

# POST: untuk menambahkan data ke list items
@app.post("/items")
def create_item(item: Item):
    items.append(item.model_dump()) # Masukin ke list
    return {"message": "Data masuk!", "data": item}

@app.put("/items")
def put_item(item: Item):
    for i in items :
        if i.id == item.id :
            item.name = i.name
    return {"message": "Data diubah!", "data": item}

@app.delete("/items")
def delete_item(item: Item):
    for i in range(len(items)) :
        if items[i].id == item.id :
            items.pop(i)
    return {"message": "Data diubah!", "data": item}