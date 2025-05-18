import { useAuthUserOrNull } from "@frontegg/react-hooks";
import { useLoginCallback } from "@src/auth/useLoginCallback";
import { useLogoutCallback } from "@src/auth/useLogoutCallback";

export function UserInfo() {
  const user = useAuthUserOrNull();

  const loginCallback = useLoginCallback(() => {
    console.log("Login initiated");
  });

  const logoutCallback = useLogoutCallback(() => {
    console.log("Logout initiated");
  });

  // If the user is not authenticated, show a login button
  if (!user) {
    return (
      <button
        onClick={loginCallback}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Log In
      </button>
    );
  }

  return (
    <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-md shadow-md">
      {user.profilePictureUrl && (
        <img
          src={user.profilePictureUrl}
          alt={`${user.name}'s profile picture`}
          className="w-10 h-10 rounded-full object-cover"
        />
      )}
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
      <button
        onClick={logoutCallback}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Log Out
      </button>
    </div>
  );
}
