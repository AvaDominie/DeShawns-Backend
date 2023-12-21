
using  Deshawns.Models;
using  Deshawns.Models.DTOs;




List<City> cities = new List<City> { };
List<Dog> dogs = new List<Dog> { };
List<Walker> walkers = new List<Walker> { };






// Lists

List<City> city = new List<City>()
{
    new City()
    {
        Id = 1,
        Name = "Nashville",
        WalkerId = 2,
        DogId = 1
    },
    new City()
    {
        Id = 2,
        Name = "New York",
        WalkerId = 3,
        DogId = 2
    },
    new City()
    {
        Id = 3,
        Name = "Atlanta",
        WalkerId = 4,
        DogId = 3
    },
    new City()
    {
        Id = 4,
        Name = "Chicago",
        WalkerId = 5,
        DogId = 4
    },
    new City()
    {
        Id = 5,
        Name = "Birmingham",
        WalkerId = 6,
        DogId = 5
    }
};



List<Dog> dog = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Buddy",
        CityId = 2,
        WalkerId = 1
    },
    new Dog()
    {
        Id = 2,
        Name = "Charlie",
        CityId = 2,
        WalkerId = 2
    },
    new Dog()
    {
        Id = 3,
        Name = "Boba",
        CityId = 5,
        WalkerId = 2
    },
    new Dog()
    {
        Id = 4,
        Name = "Bailey",
        CityId = 1,
        WalkerId = 4
    },
    new Dog()
    {
        Id = 5,
        Name = "Lucy",
        CityId = 4,
        WalkerId = 3
    },
    new Dog()
    {
        Id = 6,
        Name = "Sadie",
        CityId = 4,
        WalkerId = 5
    },
    new Dog()
    {
        Id = 7,
        Name = "Rocky",
        CityId = 3,
        WalkerId = 5
    },
};



List<Walker> walker = new List<Walker>()
{
new Walker()
    {
        Id = 1,
        Name = "John",
        CityId = 1,
        DogId = 1
    },
    new Walker()
    {
        Id = 2,
        Name = "Emily",
        CityId = 2,
        DogId = 2
    },
    new Walker()
    {
        Id = 3,
        Name = "David",
        CityId = 3,
        DogId = 3
    },
    new Walker()
    {
        Id = 4,
        Name = "Sophie",
        CityId = 4,
        DogId = 4
    },
    new Walker()
    {
        Id = 5,
        Name = "Alex",
        CityId = 5,
        DogId = 5
    }
};





var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();











app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});


app.MapGet("/api/cities", () =>
{
    return city.Select(t => new CityDTO
    {
        Id = t.Id,
        Name = t.Name,
        WalkerId = t.WalkerId,
        DogId = t.DogId
    });
});

app.MapGet("/api/dogs", () => 
{
    return dog.Select(t => new DogDTO
    {
        Id = t.Id,
        Name = t.Name,
        CityId = t.CityId,
        WalkerId = t.WalkerId
    });
});



app.MapGet("/api/walkers", () =>
{
    return walker.Select(t => new WalkerDTO 
    {
        Id = t.Id,
        Name = t.Name,
        CityId = t.CityId,
        DogId = t.DogId
    });
});




















































app.Run();
