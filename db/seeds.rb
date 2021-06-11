# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

9.times do |i|
    ArchiveItem.create(
      title: "Item #{i + 1}",
      medium: 'audio',
      year: 1972,
      location: 'Portland, OR',
      credit: 'John Doe'
    )
  end
