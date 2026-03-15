from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="API Kelompok 2",
    description="Backend API sederhana untuk manajemen items"
)

# Variabel penampung data
items = {}

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
    if item.id in items : # Cek ID sudah ada atau belum
        return {"message": "ID sudah ada, Silahkan pilih ID yang lain", "data": item}
    items[item.id] = item.model_dump() # Ubah class ke dictionary lalu Masukin ke dictionary Items
    return {"message": "Data masuk!", "data": item}

@app.put("/items")
def put_item(item: Item):
    if item.id in items :
        item_lama = items[item.id]
        items[item.id] = item
        return {"message": "Data diubah!", "data lama": item_lama, "data baru" : item}
    else :
        return {"message": "Tidak Ada Data Tersebut Didalam List", "data": item}

@app.delete("/items")
def delete_item(id: int):
    if id in items :
        item = items[id]
        del items[id]
        return {"message": "Data dihapus!", "data": item}
    else :
        return {"message": "Tidak Ada Data Tersebut Didalam List", "data": item}
            
    