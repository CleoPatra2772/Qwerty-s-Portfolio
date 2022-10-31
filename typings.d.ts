interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Skills extends SanityBody {
    _type: "skills";
    image: Image; 
    progress: number;
}

export interface Family extends SanityBody {
    _type: "family";
    familyImage: Image;
    role: string;
    message: string;
}

export interface Timeline extends SanityBody {
    _type: "timeline";
    date: date;
    age: string;
    timelineImage: Image;
    weight: string;
}