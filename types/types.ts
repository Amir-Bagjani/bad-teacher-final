export interface User {
    _id: number;
    nationalFormatPhone: string;
    isValid: boolean;
    courses: any[];
    name?: string;
    email?: string;
}

export interface Course {
    courseName: string;
	isPublished: boolean;
	mainPictureUrl: string;
	description: string;
	price: number;
	createdAt?: string;
	users: any[];
	tags: any[];
	lessons: any[];
}

export interface Lesson {
    lessonName: string;
	lessonDescription: string;
	lessonDuration: number;
	lessonThumbnailUrl: string;
	createdAt?: string;
	course: any;
	tags: any[];
	videos?: any[];
}

export interface Video {
	videoName: string;
	isFree: boolean;
	videoUrl: string;
	videoDescription: string;
	videoDuration: string;
	videoThumbnailUrl: string;
	createdAt?: string;
	lesson?: any;
}

export interface Tag {
	tagName: string;
	courses?: any[];
	lessons?: any[];
	videos?: any[];
}