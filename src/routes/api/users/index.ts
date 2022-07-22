import prisma from "$lib/db";
import type { RequestHandler } from "@sveltejs/kit";
import type { User } from '@prisma/client'

export const GET: RequestHandler = async () => {
    let user: User | null;

    user = await prisma.user.findFirst({ where: { firstname: 'Max' } });

    if (user !== null) {
        return { body: [user] };
    }

    user = await prisma.user.create({
        data: {
            firstname: 'Max',
            lastname: 'Mustermann'
        }
    });

    return { body: [user] };
}