import { Heart } from '@components/icons';
import { Layout } from '@components/common';
import { Container } from '@components/ui';

function Wishlist() {
  const isEmpty = true;

  return (
    <Container>
      <div className="mt-3 mb-20">
        <div className="flex flex-col group">
          {isEmpty ? (
            <div className="flex flex-col flex-1 justify-center items-center px-12 py-24">
              <span className="flex justify-center items-center p-12 w-16 h-16 rounded-lg border border-dashed border-secondary bg-primary text-primary">
                <Heart className="absolute" />
              </span>
              <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                Your wishlist is empty
              </h2>
              <p className="px-10 pt-2 text-center text-accents-6">
                Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
              </p>
            </div>
          ) : (
            <h1>Wishlist cards...</h1>
          )}
        </div>
      </div>
    </Container>
  );
}

Wishlist.Layout = Layout;

export default Wishlist;
