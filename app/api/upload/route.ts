import { NextResponse } from 'next/server';

 import { PrismaClient } from '@prisma/client';

// Initialize Cloudinary with your configuration
import cloudinary from 'cloudinary';


cloudinary.v2.config({
    cloud_name: 'dionw7l06',
    api_key: '454275819935523',
    api_secret: 'JgLyP_FxKHrpvdcLGbs6IAC84t4'
});

const prisma = new PrismaClient();

export const POST = async (req: any) => {
    try {
        const file = req.body.file;
        console.log('file', file);
        // Upload the file to Cloudinary
        const result = await cloudinary.v2.uploader.upload(file.path, {});

        const image = await prisma?.img.create({
            data: {
                url: result.secure_url
            }
        });
        console.log(image)
        return new NextResponse(JSON.stringify({ image }), { status: 200 });
    } catch (err) {
        console.error('Error uploading image:', err);
        return new NextResponse(JSON.stringify({ message: 'Error uploading image' }), { status: 500 });
    }
};





