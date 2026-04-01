"use client";

import { Filter } from "../../../components/recipes/Filter";
import { Macro } from "../../../components/recipes/Macro";
import { RecipeCard } from "../../../components/recipes/RecipeCard";

export default function RecipesPage() {
  return (
    <div className="space-y-12">

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-8 relative rounded-xl overflow-hidden group">

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8RHhssXWcZbt7rBixEVN4JmRmDRbq2444IxifLCZAMnxhFxcw3_VoFBVDpKZlsCw-joc2J9FLTlb1w9XKP6fd02WUPqKCui5Zyt_Di0ZN24sjCELzuT3H2pAEHXzdwBbZ_8_bNNW_OGY8e7edkDlYB5dDdzPsOlG7jMrRi-erVZRW_OQTH2lUGJXnSOR40zl6Tzo_Z0_1LxsTVwKW69-dnyz_YdHF7bnPxJm677SNh3jxiH5aXU69e_sxHsn5PGTEDzuzXhxfbCs2"
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-[#060e20]/40 to-transparent" />

          <div className="absolute bottom-0 p-10 space-y-4">

            <div className="flex gap-2">
              <span className="bg-pink-400 text-black px-3 py-1 text-xs rounded">
                HIGH PROTEIN
              </span>
              <span className="bg-[#1f2b49] text-blue-400 px-3 py-1 text-xs rounded">
                20 MIN PREP
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1] uppercase">
              Citrus-Glazed <span className="text-blue-400">Wild Salmon</span>
            </h1>

            <p className="text-gray-400 max-w-md text-sm">
              High-performance omega-3 fuel paired with seasonal citrus.
            </p>

            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded text-sm font-bold">
              VIEW RECIPE
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 card flex flex-col justify-between">

          <div className="space-y-6">

            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Daily Fuel Target
                </p>
                <h2 className="text-4xl font-bold">
                  1,840 <span className="text-gray-400 text-lg">KCAL</span>
                </h2>
              </div>

              <span className="material-symbols-outlined text-blue-400">
                query_stats
              </span>
            </div>

            {/* Progress */}
            <div>
              <div className="flex justify-between text-xs uppercase mb-2">
                <span>Calories Consumed</span>
                <span className="text-blue-400">74%</span>
              </div>

              <div className="h-2 bg-[#1e293b] rounded">
                <div className="h-full w-[74%] bg-blue-400 rounded"></div>
              </div>
            </div>

            {/* Macros */}
            <div className="grid grid-cols-3 gap-3">
              <Macro label="Protein" value="142g" />
              <Macro label="Carbs" value="95g" />
              <Macro label="Fats" value="58g" />
            </div>

          </div>

          <button className="mt-6 text-blue-400 text-xs uppercase flex items-center gap-2">
            MANAGE MEAL PLAN →
          </button>

        </div>

      </section>

      {/* FILTERS */}
      <section className="space-y-6">

        <div className="flex justify-between items-end flex-wrap gap-4">

          <div>
            <h2 className="text-2xl font-bold uppercase">
              Athlete <span className="text-blue-400">Catalog</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Bio-optimized meal options
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Filter active text="All Meals" />
            <Filter text="Low Carb" />
            <Filter text="Vegan" />
            <Filter text="Gluten Free" />
            <Filter text="Keto" />
          </div>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          <RecipeCard
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAn7DgT3uDszoXqX228yYDClczvO2h9dZs0fjFpt4QQOjJK2ECZRvPylKJuR9u46GuAp0MN-YA_dWNC6bj9M7BEtiOeBnLlwR3lZT5fvx25Ln6SLnFOQHjL6kT7YKmvYjAleL75bqE49VWy2nEbD003BAVnmOEUbWJTbKvKFQowU851ZUF3wv17k8mnrQG0I8SnxIjDltBIss3SxKuLszUfumcZ7lqLsSvnCEl3zR7WG9qTMEegQ4x2qqeqjyAEDMD8lAc0zYy1BAfM"
            title="Quinoa Power Bowl"
            kcal="420 KCAL"
            tag="POST-WORKOUT"
          />

          <RecipeCard
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAC7Mk9lTNO862hxdToNv1O3mD_3YJbrskU65luCVXkctKHDcbS0Xy-87YazXvg1e3IMyfdMEGqgfY5AV-qn2mT-Z1lOScFcM4GrYML64ViLkWomrwoBrMSkKP6aJuD2WDhQk6KZ_OwTTn-u5vw8lXbIz_eU0MQ5hWVcNxzZtRJns50FS-Vw4pELShW_CvAJ_DXAAaquXs9pK5AsghAVX6z3yLtuu7oJdaNEw7S5fqWcfDiibczfvgkzQ5KHK9dkNagKyY2p3NQTHpl"
            title="Avocado Toast Elite"
            kcal="310 KCAL"
            tag="HEALTHY FATS"
          />

          <RecipeCard
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuALRDUhllaQRYeE34chRMulCafExEgPOocqb4ic4NSIiaj49lEhMznl90wMXIrH02gP_SM60_0F8Jusde69KRedAbUsaLRYjDzASh1YkXuGcXK6SlIev3wgg5TmuIEJ6orx-4V101Q4lKznkQ7dQsGJfuYZduYH4DW1bQN7US6dTjhLr3L_BxDr5tYAvU1ZQk4IZchiE7Hy5pIneSiO2UW1MwYITCxvpBFZQD1tkXr6WhNXVFPtVoIq3hNvDHzI_8ip6wo7Z_ZA8cHP"
            title="Steak & Asparagus"
            kcal="680 KCAL"
            tag="MASS GAINER"
          />

        </div>

      </section>

    </div>
  );
}