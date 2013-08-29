model: @feed
attributes: :title :id :url
child(:entries) do
  attributes: :title :id :link
end