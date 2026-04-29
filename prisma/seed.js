import { PrismaClient } from "@prisma/client";
import products from "../gasser_rodel_products.json" with {type: "json"};

const prisma =  new PrismaClient()
async function main(){
    for(const product of products.products){
        await prisma.product.upsert({
            where: {ref: product.ref},
            update: {},
            create:{

                ref:product.ref,
                nameEn: product.nameEn,
                nameDe: product.nameDe,
                priceEur: product.priceEur,
                category: product.category,
                urlEn: product.urlEn,
                urlDe:product.urlDe,
                notes: product.notes,
                colors:{
                    create:product.colors.map((color)=>({
                        color: color
                    }))
                },

            },
        });
    }
    console.log("Send terminé - 36 produits insérés.");
    
}
main().catch(console.error
).finally(()=> prisma.$disconnect())