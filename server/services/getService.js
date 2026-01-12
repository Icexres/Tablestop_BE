const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Profile, Restaurant, RestaurantPhoto, RestaurantTable, Menu, Booking, BookedTable } = require('../models');

const getService = {
  // Get user profile data
  async getProfileData(userId) {
    const user = await User.findByPk(userId, {
      attributes: ['id', 'username', 'email', 'phone', 'role', 'created_at', 'updated_at'],
      include: [
        {
          model: Profile,
          as: 'profile',
          attributes: ['id', 'bio', 'profile_photo_url', 'created_at', 'updated_at']
        }
      ]
    });
    
    if (!user) {
      throw { statusCode: 404, message: 'User not found' };
    }
    
    return user;
  },

//   // Get all restaurants with optional filters
//   async getRestaurants(filters = {}) {
//     const { verified, location, searchTerm } = filters;
//     const whereClause = {};
    
//     if (verified !== undefined) {
//       whereClause.verified = verified;
//     }
    
//     if (location) {
//       whereClause.restaurant_location = { [require('sequelize').Op.iLike]: `%${location}%` };
//     }
    
//     if (searchTerm) {
//       whereClause.restaurant_name = { [require('sequelize').Op.iLike]: `%${searchTerm}%` };
//     }
    
//     const restaurants = await Restaurant.findAll({
//       where: whereClause,
//       include: [
//         {
//           model: RestaurantPhoto,
//           as: 'RestaurantPhotos',
//           attributes: ['id', 'photo_url', 'uploaded_at']
//         },
//         {
//           model: User,
//           attributes: ['id', 'username', 'email']
//         }
//       ],
//       order: [['created_at', 'DESC']]
//     });
    
//     return restaurants;
//   },

//   // Get single restaurant by ID with all details
//   async getRestaurantById(restaurantId) {
//     const restaurant = await Restaurant.findByPk(restaurantId, {
//       include: [
//         {
//           model: RestaurantPhoto,
//           as: 'RestaurantPhotos',
//           attributes: ['id', 'photo_url', 'uploaded_at']
//         },
//         {
//           model: RestaurantTable,
//           as: 'RestaurantTables',
//           attributes: ['id', 'table_number', 'table_status']
//         },
//         {
//           model: Menu,
//           as: 'Menus',
//           attributes: ['id', 'item_name', 'item_description', 'item_available', 'rating', 'price']
//         },
//         {
//           model: User,
//           attributes: ['id', 'username', 'email', 'phone']
//         }
//       ]
//     });
    
//     if (!restaurant) {
//       throw { statusCode: 404, message: 'Restaurant not found' };
//     }
    
//     return restaurant;
//   },

//   // Get menu items for a restaurant
//   async getRestaurantMenu(restaurantId) {
//     const menu = await Menu.findAll({
//       where: { restaurant_id: restaurantId },
//       order: [['item_name', 'ASC']]
//     });
    
//     return menu;
//   },

//   // Get available tables for a restaurant
//   async getAvailableTables(restaurantId, status = 'available') {
//     const tables = await RestaurantTable.findAll({
//       where: { 
//         restaurant_id: restaurantId,
//         table_status: status
//       },
//       order: [['table_number', 'ASC']]
//     });
    
//     return tables;
//   },

//   // Get user's bookings
//   async getUserBookings(userId) {
//     const bookings = await Booking.findAll({
//       where: { booker_id: userId },
//       include: [
//         {
//           model: Restaurant,
//           attributes: ['id', 'restaurant_name', 'restaurant_location']
//         },
//         {
//           model: BookedTable,
//           as: 'BookedTables',
//           include: [
//             {
//               model: RestaurantTable,
//               attributes: ['id', 'table_number']
//             }
//           ]
//         }
//       ],
//       order: [['booked_time', 'DESC']]
//     });
    
//     return bookings;
//   },

//   // Get restaurant's bookings (for restaurant admin)
//   async getRestaurantBookings(restaurantId) {
//     const bookings = await Booking.findAll({
//       where: { restaurant_id: restaurantId },
//       include: [
//         {
//           model: User,
//           attributes: ['id', 'username', 'email', 'phone']
//         },
//         {
//           model: BookedTable,
//           as: 'BookedTables',
//           include: [
//             {
//               model: RestaurantTable,
//               attributes: ['id', 'table_number']
//             }
//           ]
//         }
//       ],
//       order: [['booked_time', 'DESC']]
//     });
    
//     return bookings;
//   },

//   // Get single booking details
//   async getBookingById(bookingId) {
//     const booking = await Booking.findByPk(bookingId, {
//       include: [
//         {
//           model: Restaurant,
//           attributes: ['id', 'restaurant_name', 'restaurant_location']
//         },
//         {
//           model: User,
//           attributes: ['id', 'username', 'email', 'phone']
//         },
//         {
//           model: BookedTable,
//           as: 'BookedTables',
//           include: [
//             {
//               model: RestaurantTable,
//               attributes: ['id', 'table_number', 'table_status']
//             }
//           ]
//         }
//       ]
//     });
    
//     if (!booking) {
//       throw { statusCode: 404, message: 'Booking not found' };
//     }
    
//     return booking;
//   }
};

module.exports = getService;