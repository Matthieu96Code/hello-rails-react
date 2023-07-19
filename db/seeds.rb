# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

greeting = Message.create([
    { greeting: "Hello, World!" },
    { greeting: "Hello! How can I assist you today?" },
    { greeting: "Hello! What brings you here today?" },
    { greeting: "Good day! How can I help make your day better?" },
])