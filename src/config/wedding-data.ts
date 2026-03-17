import { WeddingData } from '@/types';

export const weddingData: WeddingData = {
  couple: {
    bride: {
      name: 'Hana',
      fullName: 'Nguyễn Thị B',
      role: 'bride',
      image: '/images/couple/bride.jpg',
      bio: 'Một cô gái yêu hoa, yêu nấu ăn và luôn mỉm cười. Cô ấy tin rằng tình yêu đích thực sẽ đến khi ta không tìm kiếm.',
      fatherName: 'Ông Nguyễn Văn A',
      motherName: 'Bà Trần Thị B',
    },
    groom: {
      name: 'Felix',
      fullName: 'Nguyễn Văn Nam',
      role: 'groom',
      image: '/images/couple/groom.jpg',
      bio: 'Chàng trai đam mê công nghệ nhưng lại bị chinh phục bởi nụ cười của cô ấy. Anh tin rằng gặp được đúng người là phép màu lớn nhất.',
      fatherName: 'Ông Lê Văn C',
      motherName: 'Bà Phạm Thị D',
    },
    weddingDate: '2026-05-15T10:00:00',
    hashtag: '#TuanHaWedding',
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
      date: '2026-05-15',
      title: 'Ngày trọng đại',
      description: 'Và hôm nay, chúng mình chính thức trở thành vợ chồng. Cảm ơn bạn đã đến chung vui cùng chúng mình!',
    },
  ],

  events: [
    {
      title: 'Lễ Vũ Quy',
      date: '2026-05-15',
      time: '08:00',
      venue: 'Tư gia nhà gái',
      address: '123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM',
      mapUrl: 'https://maps.google.com/?q=10.7751,106.7013',
      image: '/images/events/ceremony.jpg',
    },
    {
      title: 'Tiệc Cưới',
      date: '2026-05-15',
      time: '17:30',
      venue: 'Nhà hàng Riverside Palace',
      address: '360D Bến Vân Đồn, Phường 1, Quận 4, TP.HCM',
      mapUrl: 'https://maps.google.com/?q=10.7578,106.7001',
      image: '/images/events/reception.jpg',
    },
  ],

  bankAccounts: [
    {
      bankName: 'Vietcombank',
      accountNumber: '1234567890',
      accountHolder: 'NGUYEN VAN HUNG',
      label: 'Nhà Trai',
    },
    {
      bankName: 'Techcombank',
      accountNumber: '0987654321',
      accountHolder: 'NGUYEN THI B',
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
