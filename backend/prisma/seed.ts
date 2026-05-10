import fs from "fs";
import path from "path";
import csv from "csv-parser";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function readCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {

    const results: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", reject);

  });
}

async function seedCities() {

  const cities = await readCSV(
    path.join(__dirname, "seed", "cities.csv")
  );


  console.log(`Seeding ${cities.length} cities...`);

  for (const city of cities) {

    await prisma.city.create({
      data: {
        cityName: city.city_name,
        stateName: city.state_name,
        region: city.region,
        shortDescription: city.short_description,

        avgDailyBudgetBudget:
          Number(city.avg_daily_budget_budget),

        avgDailyBudgetMidrange:
          Number(city.avg_daily_budget_midrange),

        avgDailyBudgetLuxury:
          Number(city.avg_daily_budget_luxury),

        popularityScore:
          Number(city.popularity_score),

        bestSeason: city.best_season,

        tourismType: city.tourism_type,

        safetyRating:
          Number(city.safety_rating),

        weatherType: city.weather_type,

        mainImage: city.main_image,
      },
    });

  }

  console.log("Cities seeded successfully");
}

async function seedActivities() {

  const activities = await readCSV(
    path.join(__dirname, "seed", "activities.csv")
  );

  

  console.log(`Seeding ${activities.length} activities...`);

  for (const activity of activities) {

    const city = await prisma.city.findFirst({
      where: {
        cityName: activity.city_name,
      },
    });

    if (!city) continue;

    await prisma.activity.create({
      data: {
        cityId: city.id,

        activityName: activity.activity_name,

        category: activity.category,

        description: activity.description,

        estimatedCost:
          Number(activity.estimated_cost),

        durationHours:
          Number(activity.duration_hours),

        bestTime: activity.best_time,

        difficultyLevel:
          activity.difficulty_level,

        familyFriendly:
          activity.family_friendly === "TRUE",

        indoorOrOutdoor:
          activity.indoor_or_outdoor,

        popularityScore:
          Number(activity.popularity_score),

        activityImage:
          activity.activity_image,
      },
    });

  }

  console.log("Activities seeded successfully");
}

async function seedStays() {

  const stays = await readCSV(
    path.join(__dirname, "seed", "stays.csv")
  );

 

  console.log(`Seeding ${stays.length} stays...`);

  for (const stay of stays) {

    const city = await prisma.city.findFirst({
      where: {
        cityName: stay.city_name,
      },
    });

    if (!city) continue;

    await prisma.stay.create({
      data: {

        cityId: city.id,

        stayName: stay.stay_name,

        stayType: stay.stay_type,

        avgPricePerNight:
          Number(stay.avg_price_per_night),

        rating:
          Number(stay.rating),

        locationArea:
          stay.location_area,

        budgetCategory:
          stay.budget_category,
      },
    });

  }

  console.log("Stays seeded successfully");
}

async function seedTransport() {

  const transports = await readCSV(
    path.join(__dirname, "seed", "transport.csv")
  );



  console.log(`Seeding ${transports.length} transport routes...`);

  for (const route of transports) {

    const fromCity = await prisma.city.findFirst({
      where: {
        cityName: route.from_city,
      },
    });

    const toCity = await prisma.city.findFirst({
      where: {
        cityName: route.to_city,
      },
    });

    if (!fromCity || !toCity) continue;

    await prisma.transport.create({
      data: {

        fromCityId: fromCity.id,

        toCityId: toCity.id,

        transportType:
          route.transport_type,

        estimatedCost:
          Number(route.estimated_cost),

        estimatedDurationHours:
          Number(route.estimated_duration_hours),

        comfortLevel:
          route.comfort_level,
      },
    });

  }

  console.log("Transport routes seeded successfully");
}

async function seedFoodCosts() {

  const foods = await readCSV(
    path.join(__dirname, "seed", "food_costs.csv")
  );



  console.log(`Seeding ${foods.length} food cost records...`);

  for (const food of foods) {

    const city = await prisma.city.findFirst({
      where: {
        cityName: food.city_name,
      },
    });

    if (!city) continue;

    await prisma.foodCost.create({
      data: {

        cityId: city.id,

        budgetMealCost:
          Number(food.budget_meal_cost),

        midrangeMealCost:
          Number(food.midrange_meal_cost),

        luxuryMealCost:
          Number(food.luxury_meal_cost),

        streetFoodScore:
          Number(food.street_food_score),
      },
    });

  }

  console.log("Food costs seeded successfully");
}

async function main() {

  console.log("Cleaning old database records...");

  await prisma.itineraryItem.deleteMany();

  await prisma.itineraryDay.deleteMany();

  await prisma.expense.deleteMany();

  await prisma.checklistItem.deleteMany();

  await prisma.note.deleteMany();

  await prisma.invoice.deleteMany();

  await prisma.communityPost.deleteMany();

  await prisma.activity.deleteMany();

  await prisma.stay.deleteMany();

  await prisma.transport.deleteMany();

  await prisma.foodCost.deleteMany();

  await prisma.trip.deleteMany();

  await prisma.city.deleteMany();

  console.log("Old records removed");

  console.log("Starting full database seed...");

  await seedCities();

  await seedActivities();

  await seedStays();

  await seedTransport();

  await seedFoodCosts();

  console.log("Database seeding completed");
}

main()
  .then(async () => {

    await prisma.$disconnect();

  })
  .catch(async (e) => {

    console.error(e);

    await prisma.$disconnect();

    process.exit(1);

  });