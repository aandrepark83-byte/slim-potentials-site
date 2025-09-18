export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Shipping Policy</h1>

        <div className="prose prose-lg max-w-none text-white/80 space-y-6">
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">When will my package ship?</h2>
          <p className="text-white">
            Orders are usually processed and shipped within 1-3 business days from the time the order is placed. The day
            an order ships does not count as a day in transit. Orders placed from Friday to Sunday will be processed the
            following Monday and shipped within the next week.
          </p>

          <p className="text-white">
            Keep in mind that orders are processed in the order in which they are received. All orders are shipped from
            our location in Florida via USPS. Slim Potentials ships to all 50 U.S. states and follows the standard
            methods available by USPS.
          </p>

          <p className="text-white">
            Slim Potentials cannot guarantee same day expedited shipping when an order is placed on hold for review.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">
            My order is still saying pre-shipment, what does that mean?
          </h2>
          <p className="text-white">
            When our staff creates a label to ship your package, you'll receive a notification that your order has
            shipped. It can take anywhere from 24-48 hours to show tracking updates. Once a label is created USPS is
            notified and a carrier is sent to pick up all packages. In most cases they pick up the same day. However,
            depending on their workload, it can take them 24-48 hours to pick up. Once your package is picked up, your
            tracking will update with an estimated delivery date.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">My address is wrong on my confirmation</h2>
          <p className="text-white">
            If your address is wrong, please email us and we will update it. For fraud prevention we cannot change your
            entire shipping address. However, we will update minor errors (your zip code, apartment number, house number
            and etc).
          </p>

          <div className="bg-black/5 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-2">Need Help?</h3>
            <p className="text-white/70">
              Contact us at{" "}
              <a href="mailto:Support@slimpotentials.com" className="text-black hover:underline">
                Support@slimpotentials.com
              </a>{" "}
              for any shipping questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
