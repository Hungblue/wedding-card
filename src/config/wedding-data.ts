import { WeddingData } from '@/types';

export const weddingData: WeddingData = {
  couple: {
    bride: {
      name: 'Thúy Nga',
      fullName: 'Bùi Thị Thúy Nga',
      role: 'bride',
      image: '/images/couple/bride.jpg',
      bio: 'Một cô gái yêu hoa, yêu nấu ăn và luôn mỉm cười. Cô ấy tin rằng tình yêu đích thực sẽ đến khi ta không tìm kiếm.',
      fatherName: 'Ông Bùi Văn Ngọc',
      motherName: 'Bà Phạm Thị Hằng',
    },
    groom: {
      name: 'Văn Nam',
      fullName: 'Nguyễn Văn Nam',
      role: 'groom',
      image: '/images/couple/groom.jpg',
      bio: 'Chàng trai đam mê công nghệ nhưng lại bị chinh phục bởi nụ cười của cô ấy. Anh tin rằng gặp được đúng người là phép màu lớn nhất.',
      fatherName: 'Ông Nguyễn Văn Kiểm',
      motherName: 'Bà Nguyễn Thị Thu Hương',
    },
    weddingDate: '2026-03-28T10:00:00',
    hashtag: '#NamNgaWedding',
  },

  timeline: [
    {
      date: '2020-09-15',
      title: 'Lần đầu gặp gỡ',
      description: 'Chúng mình gặp nhau trong một buổi họp nhóm tình nguyện. Ánh mắt đầu tiên đã để lại ấn tượng khó quên.',
      image: '/images/timeline/first-meet.jpg',
    },
    {
      date: '2021-02-14',
      title: 'Hẹn hò đầu tiên',
      description: 'Buổi hẹn đầu tiên tại quán cà phê nhỏ, nơi chúng mình nói chuyện không ngừng suốt 5 tiếng đồng hồ.',
      image: '/images/timeline/first-date.jpg',
    },
    {
      date: '2022-06-20',
      title: 'Chuyến du lịch đầu tiên',
      description: 'Cùng nhau khám phá Đà Lạt - thành phố ngàn hoa. Mỗi khoảnh khắc bên nhau đều đáng trân quý.',
      image: '/images/timeline/travel.jpg',
    },
    {
      date: '2024-12-25',
      title: 'Lời cầu hôn',
      description: 'Dưới ánh đèn Giáng sinh lung linh, anh đã quỳ xuống và nói: "Em có muốn cùng anh đi hết cuộc đời này không?"',
      image: '/images/timeline/proposal.jpg',
    },
    {
      date: '2026-03-28',
      title: 'Ngày trọng đại',
      description: 'Và hôm nay, chúng mình chính thức trở thành vợ chồng. Cảm ơn bạn đã đến chung vui cùng chúng mình!',
    },
  ],

  events: [
    {
      title: 'Lễ Vu Quy',
      date: '2026-03-28',
      time: 'Thứ Bảy',
      venue: 'Tư gia nhà gái',
      address: 'Thôn Chanh Thượng, Xã Thanh Bình, Tỉnh Ninh Bình',
      mapUrl: 'https://maps.google.com/?q=Xã+Thanh+Bình,+Ninh+Bình',
      image: '/images/events/ceremony.jpg',
    },
    {
      title: 'Lễ Thành Hôn',
      date: '2026-03-28',
      time: 'Thứ Bảy',
      venue: 'Tư gia nhà trai',
      address: 'Xóm Đình, Thôn Ba Du, Xã Dân Hòa, Thành phố Hà Nội',
      mapUrl: 'https://maps.google.com/?q=Xã+Dân+Hòa,+Hà+Nội',
      image: '/images/events/reception.jpg',
    },
  ],

  bankAccounts: [
    {
      bankName: 'Vietcombank',
      accountNumber: '1234567890',
      accountHolder: 'NGUYEN VAN NAM',
      label: 'Nhà Trai',
    },
    {
      bankName: 'Techcombank',
      accountNumber: '0987654321',
      accountHolder: 'BUI THT THUY NGA',
      label: 'Nhà Gái',
    },
  ],

  heroImage: '/images/hero/cover.jpg',

  gallery: [
    '/images/gallery/photo-1.jpg',
    '/images/gallery/photo-2.jpg',
    '/images/gallery/photo-3.jpg',
    '/images/gallery/photo-4.jpg',
    '/images/gallery/photo-5.jpg',
    '/images/gallery/photo-6.jpg',
  ],

  backgroundMusic: '/audio/paulyudin-wedding-485932.mp3',
};
