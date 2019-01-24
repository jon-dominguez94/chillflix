list = List.find(user.list.id)
item_ids = list.list_items
item_ids = item_ids.map {|id| id.movie_id}

json.extract! user, :id, :email, :profile_ids
json.item_ids item_ids
# json.imageUrl url_for(user.photo)