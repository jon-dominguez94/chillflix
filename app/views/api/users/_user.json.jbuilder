# list = List.find(user.list.id)
# item_ids = list.list_items
# item_ids = item_ids.map {|id| id.movie_id}

json.extract! user, :id, :email, :profile_ids
json.list_id user.list.id
# json.imageUrl url_for(user.photo)