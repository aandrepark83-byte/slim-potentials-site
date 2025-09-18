export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Header skeleton */}
          <div className="space-y-4">
            <div className="h-8 w-48 animate-pulse rounded bg-gray-800" />
            <div className="h-4 w-32 animate-pulse rounded bg-gray-800" />
          </div>

          {/* Search skeleton */}
          <div className="ml-auto w-full md:max-w-[280px]">
            <div className="h-12 w-full animate-pulse rounded-full bg-gray-800" />
          </div>

          {/* Featured posts skeleton */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-3 rounded-lg bg-gray-900 p-4">
                  <div className="h-32 w-full animate-pulse rounded bg-gray-800" />
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-800" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-gray-800" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blog list skeleton */}
        <div className="mt-16 space-y-3">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-800" />
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4 rounded-lg bg-gray-900 p-4">
                <div className="h-16 w-16 animate-pulse rounded bg-gray-800" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-800" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
