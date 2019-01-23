json.extract! user, :id, :email, :profile_ids
json.list_id user.list.id
# json.imageUrl url_for(user.photo)