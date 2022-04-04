db.listingsAndReviews.aggregate([ { "$project": { "room_type": 1, "_id": 0 }},
                                   { "$group": { "_id": "$room_type" }}])
                                 
db.trips.find({ "birth year": { "$ne": "" }},
                  {"birth year": 1 }
                 ).limit(5).sort({ "birth year": -1 })
                 
//What room types are present in the sample_airbnb.listingsAndReviews collection?

//sort() and limit()

//In what year was the youngest bike rider from the sample_training.trips collection born?

                                
