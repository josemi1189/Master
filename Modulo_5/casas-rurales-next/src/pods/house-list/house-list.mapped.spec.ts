import { describe, it, expect } from "vitest";
import * as apiModel from "./api";
import { House, createEmptyHouseListToVM } from "./house.vm";
import { mapHouseListToVM } from "./house-list.mapped";

describe("mapHouseListToVM", () => {
  const mockHouseData: apiModel.House[] = [
    {
      id: "1",
      name: "Casa rural Málaga",
      description:
        "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baños, piscina...",
      address: "Calle Camino Cupiana",
      city: "Málaga",
      country: "España",
      bedrooms: 5,
      beds: 8,
      bathrooms: 2,
      price: 150,
      image: "/images/casa-malaga.jpg",
      amenities: ["Piscina", "WiFi", "Jardín", "Parking", "Cocina equipada"],
      reviews: [
        {
          id: "r1",
          author: "Ana",
          date: "2021-08-12",
          comment: "La casa es fantástica. 100% recomendado.",
          rating: 5,
        },
        {
          id: "r2",
          author: "Miguel",
          date: "2021-03-22",
          comment:
            "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendado",
          rating: 5,
        },
      ],
    },
  ];

  it("should map house list to view model", () => {
    const result: House[] = mapHouseListToVM(mockHouseData);

    const expectResult: House[] = [
      {
        id: "1",
        name: "Casa rural Málaga",
        description:
          "Fantástica casa rural en Málaga disponible para todo el verano, con 5 habitaciones, 2 cuartos de baños, piscina...",
        address: "Calle Camino Cupiana",
        city: "Málaga",
        price: 150,
        image: `${process.env.BASE_PICTURES_URL}/images/casa-malaga.jpg`,
        bedrooms: 5,
        beds: 8,
        bathrooms: 2,
        rating: 5,
        totalReviews: 2,
      },
    ];

    expect(result).toEqual(expectResult);
  });

  it("should return empty data when fill a null value", () => {
    const result: House[] = mapHouseListToVM(
      null as unknown as apiModel.House[],
    );

    const expectResult: House[] = createEmptyHouseListToVM();

    expect(result).toEqual(expectResult);
  });

  it("should return empty data when fill a undefined value", () => {
    const result: House[] = mapHouseListToVM(
      undefined as unknown as apiModel.House[],
    );

    const expectResult: House[] = createEmptyHouseListToVM();

    expect(result).toEqual(expectResult);
  });
});
