import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Package, Calendar, ChevronRight, ShoppingBag } from 'lucide-react';

const Orders = () => {
  // Get orders from Redux (reversed to show newest first if not already handled)
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="pt-24 pb-20 bg-(--bg-primary) min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Package className="text-(--accent-cyan)" size={32} />
          <h1 className="text-3xl font-black text-(--text-primary)">My Orders</h1>
        </div>

        {orders.length === 0 ? (
          // Empty State
          <div className="bg-white border border-(--card-border) rounded-lg p-12 text-center shadow-sm">
             <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-(--accent-cyan)">
                <Package size={40} />
             </div>
             <h2 className="text-xl font-bold text-(--text-primary) mb-2">No orders yet</h2>
             <p className="text-(--text-secondary) mb-8">Looks like you haven't bought any gear from the future yet.</p>
             <Link 
               to="/products" 
               className="inline-flex items-center gap-2 px-8 py-3 bg-(--accent-cyan) text-white font-bold rounded-[2px] hover:shadow-lg hover:brightness-110 transition-all"
             >
               Start Shopping <ShoppingBag size={18} />
             </Link>
          </div>
        ) : (
          // Orders List
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white border border-(--card-border) rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                {/* Order Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-(--card-border) flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-8">
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Order Placed</span>
                      <span className="text-sm font-medium text-(--text-primary) flex items-center gap-1">
                        <Calendar size={14} className="text-gray-400" /> {order.date}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase">Total</span>
                      <span className="text-sm font-medium text-(--text-primary)">${order.total.toFixed(2)}</span>
                    </div>
                    <div>
                       <span className="block text-xs font-bold text-gray-500 uppercase">Order #</span>
                       <span className="text-sm font-medium text-(--text-primary)">{order.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wide">
                       {order.status}
                     </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-6">
                    {order.items.map((item) => (
                      <div key={item.cartId} className="flex gap-4 items-center">
                        <div className="w-20 h-20 bg-gray-50 rounded-[4px] border border-gray-100 p-2 flex items-center justify-center">
                          <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-(--text-primary) mb-1">{item.name}</h4>
                           <p className="text-sm text-(--text-secondary) mb-2 line-clamp-1">{item.description}</p>
                           <div className="flex items-center gap-4 text-sm">
                              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">Qty: {item.quantity}</span>
                              <span className="font-bold text-(--accent-cyan)">${item.price}</span>
                           </div>
                        </div>
                        <Link to={`/product/${item.id}`} className="text-(--accent-cyan) hover:bg-blue-50 p-2 rounded-full transition-colors">
                           <ChevronRight size={20} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Orders;