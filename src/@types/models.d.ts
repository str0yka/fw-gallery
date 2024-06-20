interface Painting {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

interface Author {
  id: number;
  name: string;
}

interface Location {
  id: number;
  location: string;
}
