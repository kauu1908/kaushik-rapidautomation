'use client';

import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Review } from '@/types';

export function ProductReviews({ initialReviews }: { initialReviews: Review[] }) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [sortBy, setSortBy] = useState<'date' | 'helpfulness'>('date');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, text: '', author: '' });

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.helpfulness - a.helpfulness;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.text || !newReview.author) return;

    const review: Review = {
      id: Math.random().toString(),
      author: newReview.author,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toISOString().split('T')[0],
      helpfulness: 0,
    };

    setReviews([review, ...reviews]);
    setIsFormOpen(false);
    setNewReview({ rating: 5, text: '', author: '' });
  };

  const incrementHelpful = (id: string) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, helpfulness: r.helpfulness + 1 } : r));
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length 
    : 0;

  return (
    <div className="mt-20 pt-16 border-t border-[#0F0F0F]/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="font-serif text-3xl mb-2">Customer Reviews</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`w-5 h-5 ${star <= Math.round(averageRating) ? 'fill-[#C9A646] text-[#C9A646]' : 'fill-[#E6E6E6] text-[#E6E6E6]'}`} />
              ))}
            </div>
            <span className="text-sm text-[#0F0F0F]/70">Based on {reviews.length} reviews</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <select 
            className="px-4 py-3 border border-[#0F0F0F]/20 rounded-none bg-transparent outline-none focus:border-[#C9A646] text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'helpfulness')}
          >
            <option value="date">Sort by Latest</option>
            <option value="helpfulness">Sort by Most Helpful</option>
          </select>
          <Button onClick={() => setIsFormOpen(!isFormOpen)} variant="outline">
            {isFormOpen ? 'Cancel Review' : 'Write a Review'}
          </Button>
        </div>
      </div>

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="mb-12 bg-[#F8F5F0] p-6 lg:p-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <h3 className="font-serif text-xl mb-6">Write Your Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-widest text-[#0F0F0F]/70">Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 border border-[#0F0F0F]/10 bg-white outline-none focus:border-[#C9A646]"
                value={newReview.author}
                onChange={e => setNewReview({...newReview, author: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-widest text-[#0F0F0F]/70">Rating</label>
              <div className="flex items-center gap-2 h-[50px]">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    className="focus:outline-none"
                    onClick={() => setNewReview({...newReview, rating: star})}
                  >
                    <Star className={`w-8 h-8 transition-colors ${star <= newReview.rating ? 'fill-[#C9A646] text-[#C9A646]' : 'fill-[#E6E6E6] text-[#E6E6E6]'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-sm uppercase tracking-widest text-[#0F0F0F]/70">Review</label>
            <textarea 
              required
              rows={4}
              className="w-full px-4 py-3 border border-[#0F0F0F]/10 bg-white outline-none focus:border-[#C9A646] resize-none"
              value={newReview.text}
              onChange={e => setNewReview({...newReview, text: e.target.value})}
            />
          </div>
          <div className="flex gap-4">
            <Button size="lg" type="submit">Submit Review</Button>
          </div>
        </form>
      )}

      <div className="flex flex-col gap-8">
        {sortedReviews.length === 0 ? (
          <p className="text-[#0F0F0F]/50 italic">No reviews yet. Be the first to review this product!</p>
        ) : (
          sortedReviews.map(review => (
            <div key={review.id} className="pb-8 border-b border-[#0F0F0F]/10 last:border-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-[#C9A646] text-[#C9A646]' : 'fill-[#E6E6E6] text-[#E6E6E6]'}`} />
                    ))}
                  </div>
                  <h4 className="font-medium text-lg">{review.author}</h4>
                </div>
                <span className="text-sm text-[#0F0F0F]/50">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric'})}</span>
              </div>
              <p className="text-[#0F0F0F]/80 leading-relaxed mb-4">{review.text}</p>
              <button 
                onClick={() => incrementHelpful(review.id)}
                className="flex items-center gap-2 text-sm text-[#0F0F0F]/60 hover:text-[#0F0F0F] transition-colors group"
                type="button"
              >
                <ThumbsUp className="w-4 h-4 group-hover:fill-[#0F0F0F]" />
                <span>Helpful ({review.helpfulness})</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
