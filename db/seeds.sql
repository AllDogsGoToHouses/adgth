USE dogs_db;

INSERT INTO Dogs (dog_name, dog_image_url, dog_size, age, activity_level, gender, breed, likes, dislikes, shelter_id)
VALUES ("Marley", "http://www.toptenz.net/wp-content/uploads/2013/10/rasta-dog.jpg", "Small", 15, "Active", "Male/Neutered", "Pitbull", "Weed, Chillin, Small Birds", "Loud Noises, Cops", 1), 
("Google", "https://i.imgflip.com/1f0068.jpg", "Small", 13, "Playful", "Male", "Chihuahua", "Kids, Big Dogs", "Small Dogs, bugs, bug eyed things", 2),
("Asher", "http://cdn.ebaumsworld.com/mediaFiles/picture/718392/85044337.jpg", "Small", 7, "Lazy", "Female/Spayed", "Pomeranian", "Vinyl Records, Kale", "People, trends, happiness", 3),
("Joker", "https://cdn.trendhunterstatic.com/phpthumbnails/195/195643/195643_1_800.jpeg", "Medium", 9, "Active", "Male/Neuted", "Random", "Botox, Joke Shops", "Ugly people", 2),
("Jensen", "https://cdn.trendhunterstatic.com/phpthumbnails/59/59895/59895_1_800.jpeg", "Large", 10, "Lazy", "Male", "Bulldog", "Money, Naps", "Americans, Welfare for all", 1),
("Bruce", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCg2xRxdCoSe_oMoSkV2oqzjXI8C0F4eOPm-Gn_ZJ-2MnRgV9HNQ", "Medium", 8, "Active", "Male/Neutered", "Batdog", "Bats, Caves, Underground Lairs", "Penguins, Riddles, People with parents", 2),
("Myrtle", "http://growingfruit-images.s3-us-west-2.amazonaws.com/original/3X/7/4/743fc05b491f23207a2e2c4681bf3f66419c61c2.jpg", "Large", 15 , "Playful", "Female/Spayed", "Golden Retreiver", "Long walks on the beach, rom-coms", "stuff", 1),
("Lila", "https://image.ibb.co/fWrKv8/01.jpg", "Medium", 4, "Active", "Female", "Pitbull", "Kong Toys, cuddles", "Sharing, Dry Food", 2),
("Ali", "https://image.ibb.co/kc0q2o/02.jpg", "Medium", 7, "Active", "Male", "Boxer", "Boxing, Smooth Talkin", "Yoga", 1),
("Krooger", "https://image.ibb.co/b36V2o/04.jpg", "Large", 14, "Playful", "Male/Neutered", "Husky", "Nightmares, Children", "Fire, Parents", 1),
("Mila", "https://image.ibb.co/ifiooT/05.jpg", "Small", 9, "Lazy", "Female/Spayed", "Mini Bulldog", "Fashion, Ballet", "Natalie Portman", 3),
("Scrappy", "https://image.ibb.co/g8tXF8/06.jpg", "Small", 1, "Active", "Male", "Bulldog", "Mysteries, Snacks", "People in Masks", 3),
("Wishbone", "https://image.ibb.co/b06xho/08.jpg", "Medium", 10, "Playful", "Male/Neutered", "Jack Russel Terrier", "Books, Dressing in period costumes", "TV, Video Games", 2),
("Superfly", "https://image.ibb.co/mqbKv8/09.jpg", "Large", 9, "Lazy", "Male/Neutered", "Pitbull", "Cold Chillin, Old School Gold Chains, Soundtrack to the A-Team", "Fools", 1),
("Oliver", "https://image.ibb.co/gLKuTT/10.jpg", "Large", 12, "Active", "Male/Neutered", "Labordoodle", "Coffee, Books, Feeling Superior", "Two black men minding their own business", 1),
("Ryder", "https://preview.ibb.co/kVKuTT/13.jpg", "Small", 5, "Playful", "Male", "Yorkshire Terrier", "Leather, Using motorcycle to mask insecurities", "Cars, Suede", 3),
("Madame Geroux", "https://preview.ibb.co/mfQONo/15.jpg", "Large", 8, "Lazy", "Female/Spayed", "Pitbull", "Martinis, Barking at the help", "Youth, Dogs that are more attractive", 1),
("Wilfred", "https://preview.ibb.co/ktMKv8/16.jpg", "Large", 7, "Playful", "Male", "Imaginary Dog", "Ruining plans, Eating at the table", "Cats", 2),
("Bond", "https://preview.ibb.co/g3Q18T/17.jpg", "Large", 11, "Playful", "Male", "German Shepard", "Martinis, Bitches", "British Super Villians", 1);

INSERT INTO Adopters (adopter_name, adopter_email, adopter_favorites)
VALUES ("Jared", "adopter@email.com", "1, 2, 3, 7");

INSERT INTO Shelters (shelter_name, shelter_manager, shelter_number, shelter_email)
VALUES ("Cause for SB Paws", "Dr. Manager", "9093513274", "Cause4SBPaws@gmail.com");